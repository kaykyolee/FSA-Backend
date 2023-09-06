import { useState } from "react";
import { createSchedule } from "../helpers/schedule";
import { useNavigate } from "react-router-dom";

export default function AddSchedule() {
  const [scheduleId, setScheduleId] = useState("");
  const [date, setDate] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      createSchedule(scheduleId, date);
      navigate("/");
    } catch (error) {
      alert("There was an error creating a new date");
    }
  }
  return (
    <section className="addSchedule">
      <h3>Add a new date</h3>
      <form onSubmit={handleSubmit}>
        <input
          className="newScheduleForm"
          value={scheduleId}
          type="text"
          name="scheduleId"
          placeholder="Schedule ID for date"
          onChange={(event) => setScheduleId(event.target.value)}
        />

        <br />

        <input
          className="newScheduleForm"
          value={date}
          type="date"
          name="date"
          placeholder="schedule date"
          onChange={(event) => setDate(event.target.value)}
        />

        <br />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
