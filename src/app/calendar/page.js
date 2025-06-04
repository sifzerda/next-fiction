"use client"

import { useState } from "react"
import { Calendar, dateFnsLocalizer } from "react-big-calendar"
import { useDrag, useDrop, DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import { format, parse, startOfWeek, getDay } from "date-fns"
import { enUS } from "date-fns/locale"

import "react-big-calendar/lib/css/react-big-calendar.css"

const locales = {
  "en-US": enUS,
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

const ItemTypes = {
  BOX: "box",
}

// Draggable box component
function DraggableBox({ name }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.BOX,
    item: { name },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))

  return (
    <div
      ref={drag}
      className={`cursor-move rounded border border-gray-500 p-2 mb-2 text-center select-none ${
        isDragging ? "opacity-50" : "opacity-100"
      }`}
      style={{ backgroundColor: "#eef2ff" }}
    >
      {name}
    </div>
  )
}

// Date cell wrapper that handles drops with uniqueness check
function DateCellWrapper({ children, value, onAddEvent, events }) {
  const [, drop] = useDrop(() => ({
    accept: ItemTypes.BOX,
    drop: (item) => {
      const start = new Date(value)
      const end = new Date(value)
      end.setHours(end.getHours() + 1) // 1 hour event

      // Check if event with same title already exists on this date
      const exists = events.some((ev) => {
        const sameDay =
          ev.start.toDateString() === start.toDateString() &&
          ev.title === item.name
        return sameDay
      })

      if (exists) {
        alert(`"${item.name}" event already exists on this date!`)
        return
      }

      const newEvent = {
        id: Math.random().toString(36).substr(2, 9),
        title: item.name,
        start,
        end,
        allDay: false,
      }
      onAddEvent(newEvent)
    },
  }))

  return (
    <div ref={drop} style={{ height: "100%", width: "100%" }}>
      {children}
    </div>
  )
}

export default function MyCalendar() {
  const [events, setEvents] = useState([])

  function handleAddEvent(newEvent) {
    setEvents((prev) => [...prev, newEvent])
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex gap-6 p-6 max-w-7xl mx-auto">
        {/* Left panel with draggable boxes */}
        <div className="w-40">
          <h3 className="mb-4 font-semibold text-lg">Drag these:</h3>
          <DraggableBox name="Name 1" />
          <DraggableBox name="Name 2" />
          <DraggableBox name="Name 3" />
          <DraggableBox name="Name 4" />
        </div>

        {/* Calendar */}
        <div className="flex-1">
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 600 }}
            components={{
              dateCellWrapper: (props) => (
                <DateCellWrapper
                  {...props}
                  onAddEvent={handleAddEvent}
                  events={events}
                />
              ),
            }}
          />
        </div>
      </div>
    </DndProvider>
  )
}
