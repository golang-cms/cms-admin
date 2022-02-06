import FullCalendar, {
  DateSelectArg,
  EventClickArg,
  EventDropArg,
} from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import timeGridPlugin from "@fullcalendar/timegrid";
import AdapterMoment from "@mui/lab/AdapterMoment";
import { Grid } from "@mui/material";
import { styled } from "@mui/system";
import moment from "moment";
import { Dispatch, SetStateAction, useState } from "react";
import useGetReservations from "../../../../../hooks/api/rms/reservation/useGetReservations";
import FormDialog from "../../../common/components/dialog/FormDialog";
import { onClose } from "../../../common/restful/dialog";
import { formatter, ReservationModel } from "../model/reservation";
import { formFields } from "./formFields";
import { LocalizationProvider } from "@mui/lab";
import { ResourceModel } from "../../resources/model/resource";
import { ClientModel } from "../../client/model/client";

const businessHours = {
  // days of week. an array of zero-based day of week integers (0=Sunday)
  daysOfWeek: [1, 2, 3, 4, 5], // Monday - Friday
  startTime: "08:00", // a start time (8am in this example)
  endTime: "18:00", // an end time (6pm in this example)
};

const apiResponseToReservations = (apiResponse: any) =>
  apiResponse?.map((item: any) => {
    return {
      ...item,
      start: moment.utc(item?.start).local().format(formatter),
      end: moment.utc(item?.end).local().format(formatter),
    };
  });

const FullCalendarStyled = styled("div")(
  ({ theme }) => `
  .fc-theme-standard .fc-popover{
        background: ${theme.palette.secondary.main};
    };
    .fc .fc-list-sticky .fc-list-day > * {
        background: ${theme.palette.secondary.main};
    };
    .fc .fc-list-event:hover td {
        background: ${theme.palette.secondary.main};
    };
    .fc .fc-daygrid-week-number {
        color: ${theme.palette.text.secondary}
    }
  `
);
const API_URL = `${process.env.REACT_APP_RESERVATION_API_BASE_URL}/reservations`;
const HEAD_TITLE = `Reservations`;

const Reservation = () => {
  const [openSave, setOpenSave] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [dialogData, setDialogData] = useState<ReservationModel>();
  const [refetchToggle, setRefetchToggle] = useState(false);
  const [apiResponse, error] = useGetReservations(refetchToggle);
  const existReservations = apiResponseToReservations(apiResponse);
  console.log(existReservations, error, openDelete);

  return (
    <Grid>
      {/*
      <SaveDialog
        open={open}
        onClose={(action: Action) =>
          handleClose(action, refetchToggle, setOpen, setRefetchToggle, setDialogData)
        }
        data={dialogData}
      />
    */}

      <LocalizationProvider dateAdapter={AdapterMoment}>
        <FormDialog
          fullscreen={false}
          headTitle={HEAD_TITLE}
          apiUrl={API_URL}
          open={openSave}
          onClose={onClose(
            setOpenSave,
            setOpenDelete,
            refetchToggle,
            setRefetchToggle,
            setDialogData
          )}
          formFields={formFields}
          data={dialogData}
          dataTransform={dataTransform}
        />
      </LocalizationProvider>
      <FullCalendarStyled>
        <FullCalendar
          plugins={[
            dayGridPlugin,
            timeGridPlugin,
            interactionPlugin,
            listPlugin,
          ]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
          }}
          initialView="timeGridWeek"
          businessHours={businessHours}
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={true}
          weekNumbers={true}
          events={existReservations}
          select={(arg: DateSelectArg) =>
            addEventByClick(arg, setDialogData, setOpenSave)
          }
          eventClick={(eventClick: EventClickArg) =>
            modifyEventByClick(
              eventClick,
              existReservations,
              setDialogData,
              setOpenSave
            )
          }
          eventDrop={(eventClick: EventDropArg) =>
            modifyEventByDrag(
              eventClick,
              existReservations,
              setDialogData,
              setOpenSave
            )
          }
          eventResize={(eventClick) =>
            modifyEventByDrag(
              eventClick,
              existReservations,
              setDialogData,
              setOpenSave
            )
          }
          eventAdd={() => {
            console.log("add event");
          }}
          eventsSet={() => {
            console.log("set event");
          }}
          // eventContent={EventContent}
        />
      </FullCalendarStyled>
    </Grid>
  );
};

const dataTransform = (submitReservation: any, id?: number): ReservationModel =>
  ({
    ...submitReservation,
    id: id,
    start: moment.utc(submitReservation.start).format(formatter),
    end: moment.utc(submitReservation.end).format(formatter),
    status: 1,
    resource: { id: 1, title: "" } as ResourceModel,
    client: {
      id: 1,
      email: "info@smartcodee.com",
      firstName: "smart",
      lastName: "codee",
    } as ClientModel,
  } as ReservationModel);

/*
const handleClose = (
  action: Action,
  saved: boolean,
  setOpen: Dispatch<SetStateAction<boolean>>,
  setSaved: Dispatch<SetStateAction<boolean>>,
  setData: Dispatch<SetStateAction<ReservationModel | undefined>>
) => {
  console.log("close dialog");
  setOpen(false);
  switch (action) {
    case Action.Create:
    case Action.Update:
      setOpen(false);
      break;
    case Action.Delete:
      setOpen(false);
      break;
  }
  setData(undefined);
  setSaved(!saved);
};
*/

const addEventByClick = (
  arg: DateSelectArg,
  setData: Dispatch<SetStateAction<ReservationModel | undefined>>,
  setOpen: Dispatch<SetStateAction<boolean>>
) => {
  console.log("date select", arg);
  setData({
    start: moment(arg.start),
    end: moment(arg.end),
  } as ReservationModel);
  setOpen(true);
};

const modifyEventByClick = (
  eventClick: EventClickArg,
  reservations: any,
  setData: Dispatch<SetStateAction<ReservationModel | undefined>>,
  setOpen: Dispatch<SetStateAction<boolean>>
) => {
  const clickedReservation = getReservationByEvent(eventClick, reservations);
  const data: ReservationModel = {
    ...clickedReservation,
    start: moment(clickedReservation.start),
    end: moment(clickedReservation.end),
    //start: moment.parseZone(clickedReservation.start, formatter),
    //end: moment.parseZone(clickedReservation.end, formatter),
  };
  setData(data);
  setOpen(true);
};

const modifyEventByDrag = (
  eventClick: EventClickArg,
  reservations: any,
  setData: Dispatch<SetStateAction<ReservationModel | undefined>>,
  setOpen: Dispatch<SetStateAction<boolean>>
) => {
  console.log(eventClick);
  const clickedReservation = getReservationByEvent(eventClick, reservations);
  const data: ReservationModel = {
    ...clickedReservation,
    start: moment(eventClick.event.start),
    end: moment(eventClick.event.end),
  };
  setData(data);
  setOpen(true);
};

const getReservationByEvent = (
  eventClick: EventClickArg,
  reservations: any
) => {
  console.log(
    "click event",
    eventClick.event.id,
    eventClick.event.title,
    eventClick.event.start,
    eventClick.event.end
  );

  const clickedReservation = reservations.find(
    (r: any) => r.id.toString() === eventClick.event.id
  );
  return clickedReservation;
};

export default Reservation;

/*
const EventContent = (eventContent: EventContentArg) => {
  return (
    <>
      <b>{eventContent.timeText}</b>
      <b>{eventContent.event.title}</b>
    </>
  );
};
*/
