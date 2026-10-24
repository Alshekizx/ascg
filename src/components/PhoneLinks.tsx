const currentPhones = ["+234 913 800 0004", "+234 913 800 0005"];

export default function PhoneLinks({ phone, className, style }: { phone?: string; className?: string; style?: React.CSSProperties }) {
  const phones = !phone || phone.replace(/\D/g, "") === "2348057576575"
    ? currentPhones
    : phone.split(/\s*[/,;\n]\s*/).filter(Boolean);
  return <>{phones.map((number, index) => (
    <a key={`${number}-${index}`} href={`tel:${number.replace(/[^+\d]/g, "")}`} className={className} style={style}>
      {number}
    </a>
  ))}</>;
}
