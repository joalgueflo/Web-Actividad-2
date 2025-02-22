interface RectangleProps {
    color: string;
}



export default function Rectangle({ color }: RectangleProps) {
    return (
        <div style={{ backgroundColor: color }} className={`w-20 h-20 flex items-center justify-center row-start-2`}></div>
    );
}