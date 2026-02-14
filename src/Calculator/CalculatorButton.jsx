
const buttons = [
  { label: "7", color: "text-blue-700" },
  { label: "8", color: "text-blue-700" },
  { label: "9", color: "text-blue-700" },
  { label: "/", color: "text-red-500" },
  { label: "4", color: "text-blue-700" },
  { label: "5", color: "text-blue-700" },
  { label: "6", color: "text-blue-700" },
  { label: "*", color: "text-red-500" },
  { label: "1", color: "text-blue-700" },
  { label: "2", color: "text-blue-700" },
  { label: "3", color: "text-blue-700" },
  { label: "-", color: "text-red-500" },
  { label: "0", color: "text-blue-700" },
  { label: ".", color: "text-blue-700" },
  { label: "=", color: "text-red-500" },
  { label: "+", color: "text-red-500" },
];

export default function CalculatorButton({getData, calculate}) {
  return (
    <>
      {buttons.map((button, index) => (
        <div
          key={index}
          className={`bg-white w-fit px-6 py-1 rounded-lg border border-black cursor-pointer ${button.color}`}
          onClick={() => button.label !== '=' ? getData(prev => prev += button.label) : calculate()}
        >
          {button.label}
        </div>
      ))}
    </>
  );
}
