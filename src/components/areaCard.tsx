import React, { FunctionComponent } from "react"
import { AreaCardData } from "../utils/components"
const CardDataContext = React.createContext<AreaCardData | null>(null)
const CustomCard: FunctionComponent<AreaCardData> = props => {
  return (
    <CardDataContext.Provider value={props}>
      <div>

      </div>
    </CardDataContext.Provider>
  )

}

export default CustomCard
