import React from "react"
import monitor from "../images/monitor.png"
import bigTextMonitor from "../images/monitorBiggerText.png"
import hugeTextMonitor from "../images/monitorHugeText.png"

const Monitor = () => {
  return (
    <div className="monitor">
      <img
        src={monitor}
        alt="sorry if u can't see this it looks amazing"
        className="monitorImage smallMonitor"
      />
      <img
        src={bigTextMonitor}
        alt="sorry if u can't see this it looks amazing"
        className="monitorImage bigMonitor"
      />
      <img
        src={hugeTextMonitor}
        alt="sorry if u can't see this it looks amazing"
        className="monitorImage hugeMonitor"
      />
    </div>
  )
}

export default Monitor
