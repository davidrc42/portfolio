import React from "react"
import monitor from "../images/monitor.png"
import bigTextMonitor from "../images/monitorBiggerText.png"
import hugeTextMonitor from "../images/monitorHugeText.png"

const Monitor = () => {
  return (
    <div className="monitor">
      <img
        src={hugeTextMonitor}
        alt="sorry if u can't see this it looks amazing"
        className="monitorImage"
      />
    </div>
  )
}

export default Monitor
