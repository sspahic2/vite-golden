import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import ButtonFull from '../../../../../components/ButtonFull';
import Typography from '../../../../../components/Typography';

const teilnehmerData = [
  {
    id: 1,
    name: 'Max Mustermann',
  },
  {
    id: 2,
    name: 'Maximilia Mustermann',
  }
];

const TerminCalendarComponent = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [teilnehmer, setTeilnehmer] = useState(teilnehmerData);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

  const monthNames = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
  const weekDays = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const handleInputChange = (index: number, newName: string) => {
    setTeilnehmer((prev) => {
      const updatedTeilnehmer = [...prev];
      updatedTeilnehmer[index].name = newName;
      return updatedTeilnehmer;
    });
  };

  const handleRemoveTeilnehmer = (index: number) => {
    setTeilnehmer((prev) => prev.filter((_, i) => i !== index));
  };

  const handleDateSelect = (day: number) => {
    const newSelectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    setSelectedDate(newSelectedDate); // Ažuriranje izabranog datuma
  };

  const renderCalendarDays = () => {
    const days = [];
    const totalDays = daysInMonth;
    const firstDay = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="w-10 h-10" />);
    }

    for (let day = 1; day <= totalDays; day++) {
      const isSelected = selectedDate && day === selectedDate.getDate() && currentDate.getMonth() === selectedDate.getMonth() && currentDate.getFullYear() === selectedDate.getFullYear();
      days.push(
        <div
          key={day}
          onClick={() => handleDateSelect(day)}
          className={`w-10 h-10 flex items-center justify-center rounded-full ${isSelected ? 'bg-[#FFC278] text-black' : ''} cursor-pointer hover:bg-gray-100`}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="flex flex-col">
      <Typography size="big" className="font-bold text-gray">
        Terminkalender
      </Typography>

      <div className="flex justify-center mt-4">
        <div className="w-full max-w-sm p-4">
          <div className="flex items-center justify-between mb-4">
            <button onClick={handlePrevMonth} className="p-2 hover:bg-gray-100 rounded-full">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <Typography size="normal" className="font-bold">
              {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </Typography>
            <button onClick={handleNextMonth} className="p-2 hover:bg-gray-100 rounded-full">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1">
            {weekDays.map((day) => (
              <div key={day} className="w-10 h-10 flex items-center justify-center text-gray-500 text-sm">
                {day}
              </div>
            ))}
            {renderCalendarDays()}
          </div>
        </div>
      </div>

      <div className="border-b-2 border-primary pt-8 max-w-full" />

      {/* {selectedDate && (
        <div className="text-center mt-4">
          <Typography size="large" className="font-bold text-gray">
            Izabrani datum: {selectedDate.toLocaleDateString()}
          </Typography>
        </div>
      )} */}

      <div className="flex justify-center mt-8">
        <div className="w-full max-w-xl p-4 cardShadow">
          <div className="flex flex-row justify-between">
            <Typography size="large" className="font-bold text-gray">
              Angebot 1
            </Typography>
            <Typography size="large" className="font-bold text-gray">
              06.01.2023 | 13:20
            </Typography>
          </div>

          <div className="flex flex-col space-y-4">
            <Typography size="large" className="mt-4">
              {teilnehmer.length} Teilnehmer
            </Typography>

            {teilnehmer.map((teil, index) => (
              <div key={teil.id} className="relative w-4/5">
                <input
                  type="text"
                  value={teil.name}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  className="w-full p-2.5 inputSettings pr-10"
                />
                <i
                  onClick={() => handleInputChange(index, teil.name)}
                  className="ri-pencil-fill absolute right-10 top-1/2 transform -translate-y-1/2 text-gray-500 text-2xl cursor-pointer"
                />
                <i
                  onClick={() => handleRemoveTeilnehmer(index)}
                  className="ri-close-large-line absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 text-2xl cursor-pointer"
                />
              </div>
            ))}
          </div>

          <div className="w-full flex flex-row space-x-4 mt-4">
            <input
              type="text"
              name="ort"
              id="ort"
              className="block w-4/5 p-2.5 inputSettings"
              placeholder="Teilnehmer Name"
              required
            />
            <ButtonFull variant="primary" onClick={() => { }} title="Hinzufügen" className="w-40" />
          </div>
          <ButtonFull variant="primary" onClick={() => { }} title="Zur Sitzung" className="w-56 mt-4" />
        </div>
      </div>
    </div>
  );
};

export default TerminCalendarComponent;
