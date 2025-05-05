"use client";

import React, { useState } from "react";

export function Calendar() {
  const [selectedDate, setSelectedDate] = useState(null);

  const today = new Date().toISOString().split("T")[0]; // yyyy-mm-dd

  return (
    <div className="flex flex-col items-start space-y-2">
      <label htmlFor="calendar" className="text-sm font-medium text-gray-700">
        Select a date:
      </label>
      <input
        id="calendar"
        type="date"
        className="border rounded px-3 py-1"
        min={today}
        onChange={(e) => setSelectedDate(e.target.value)}
      />
      {selectedDate && (
        <p className="text-sm text-gray-600">You selected: {selectedDate}</p>
      )}
    </div>
  );
}
