import $ from "jquery";
import { useEffect } from "react";

export default function Indirection() {
  useEffect(() => {
    console.log($("#indirection"));
  }, []);

  return <div id="indirection">Some div</div>;
}
