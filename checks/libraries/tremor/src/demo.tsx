import React from "react";
import { Card } from "./components/Card/Card";
import { BarChart } from "./components/BarChart/BarChart";
import { Table, TableRoot, TableHead, TableHeaderCell, TableBody, TableRow, TableCell } from "./components/Table/Table";
export function Demo() {
  return <main><h1>Tremor source check</h1><p>Demonstration data only</p><Card><h2>Resolved requests</h2><BarChart data={[{day:"Monday",Resolved:12},{day:"Tuesday",Resolved:18}]} index="day" categories={["Resolved"]} className="h-64"/><TableRoot><Table><TableHead><TableRow><TableHeaderCell>Day</TableHeaderCell><TableHeaderCell>Resolved</TableHeaderCell></TableRow></TableHead><TableBody><TableRow><TableCell>Monday</TableCell><TableCell>12</TableCell></TableRow></TableBody></Table></TableRoot></Card></main>;
}
