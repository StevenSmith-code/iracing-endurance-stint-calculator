type UserRegistrationProps = {
  id: string;
  type: "email" | "text" | "password";
  inputType: "select" | "input";
  options?: { value: string; label: string; id: string }[];
  label?: string;
  placeholder: string;
  name: string;
};

type EventConfigProps = {
  id: string;
  type: "text";
  inputType: "select" | "input";
  options?: { value: string; label: string; id: string }[];
  label?: string;
  toolTipDescription?: string;
  placeholder: string;
  name: string;
};

export const USER_REGISTRATION_FORM: UserRegistrationProps[] = [
  {
    id: "1",
    inputType: "input",
    placeholder: "Full name",
    name: "fullname",
    type: "text",
  },
  {
    id: "2",
    inputType: "input",
    placeholder: "Email",
    name: "email",
    type: "email",
  },
  {
    id: "3",
    inputType: "input",
    placeholder: "Confirm Email",
    name: "confirmEmail",
    type: "email",
  },
  {
    id: "4",
    inputType: "input",
    placeholder: "Password",
    name: "password",
    type: "password",
  },
  {
    id: "5",
    inputType: "input",
    placeholder: "Confrim Password",
    name: "confirmPassword",
    type: "password",
  },
];

export const USER_LOGIN_FORM: UserRegistrationProps[] = [
  {
    id: "1",
    inputType: "input",
    placeholder: "Enter your email",
    name: "email",
    type: "email",
  },
  {
    id: "2",
    inputType: "input",
    placeholder: "Password",
    name: "password",
    type: "password",
  },
];

export const EVENT_CONFIG_FORM: EventConfigProps[] = [
  {
    id: "1",
    inputType: "input",
    placeholder: "Preset Name",
    label: "Preset Name",
    name: "presetName",
    type: "text",
  },
  {
    id: "2",
    inputType: "input",
    placeholder: "24:00:00",
    label: "Race Duration",
    toolTipDescription: "Duration of race in hh:mm:ss format.",
    name: "raceDuration",
    type: "text",
  },
  {
    id: "3",
    inputType: "input",
    label: "Session GMT start time",
    placeholder: "15:00:00",
    toolTipDescription: `GMT start according to real world "Clock Time".`,
    name: "sessionStartGMT",
    type: "text",
  },
  {
    id: "4",
    inputType: "input",
    label: "Race ToD start time",
    placeholder: "8:00:00",
    toolTipDescription: `Race start time according to in-game session time.`,
    name: "raceStartTimeOfDay",
    type: "text",
  },
  {
    id: "5",
    inputType: "input",
    label: "Green flag offset",
    placeholder: "0:30:00",
    toolTipDescription: `Delay between the start of the session and the start of the first fuel stint. Adjust this to account for session load time, qualifying if applicable, and formation lap duration.
  This offset will be added to the Race Start time for most calculations.`,
    name: "greenFlagOffset",
    type: "text",
  },
  {
    id: "6",
    inputType: "input",
    label: "Pit Duration",
    placeholder: "0:01:00",
    toolTipDescription: `Total delta incurred for a pit stop. Note this is *TOTAL* delta, not just the time spent in the pit stall. This value will be added to fuel stint times for all relevant calculations.`,
    name: "pitDuration",
    type: "text",
  },
  {
    id: "8",
    inputType: "input",
    label: "Standard Laptime",
    placeholder: "0:01:24",
    toolTipDescription: `Standard "flat out" laps without attempt at fuel saving. This is a baseline lap that should more or less be the average for your team. Driver specific pace can be defined in Driver Lap Factors.`,
    name: "stdStintFuelLaptime",
    type: "text",
  },
  {
    id: "9",
    inputType: "input",
    label: "Standard Fuel per Lap",
    placeholder: "0.74",
    name: "stdStintFuelPerLap",
    type: "text",
  },
  {
    id: "10",
    inputType: "input",
    label: "Fuel Saving Laptime",
    placeholder: "0:01:25",
    toolTipDescription: `Fuel saving run intended to increase lap count for a single fuel stint.`,
    name: "fuelSaveStintLapTime",
    type: "text",
  },
  {
    id: "11",
    inputType: "input",
    label: "Fuel Saving Fuel per lap",
    placeholder: "0.75",
    name: "fuelSaveStintFuelPerLap",
    type: "text",
  },
];
