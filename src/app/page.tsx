'use client';
import { ptrojectDatas } from "../data/home.mockup";
import CardPtroject from "../layout/home/CardPtroject";

export default function Home() {


  return (
    <div className="min-h-[90vh]  grid items-center">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-2">
      {ptrojectDatas.map((items: any, i: number) => (
        <CardPtroject key={i}
        icon={items.icon}
        url={items.url}
        name={items.name}
        />
      ))}
      </div>
    </div>
  );
}
