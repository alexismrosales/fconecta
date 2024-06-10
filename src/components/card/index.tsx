import React, { FunctionComponent } from "react"
import { AreaCardData } from "../../utils/components"
const CardDataContext = React.createContext<AreaCardData | null>(null)
const CustomCard: FunctionComponent<AreaCardData> = props => {
  const title = props.title
  const path = `img/areas/${title}.png`
  const link = props.link

  return (
    <CardDataContext.Provider value={props}>
      <div className="" id="card-container">
        <div className="" id="card">
          <div className="" id="card-header">
          </div>
          <div className="" id="card-body">
            <h3 className="">{title}</h3>
          </div>
          <div className="" id="card-footer">
          </div>
        </div>
      </div>
    </CardDataContext.Provider>
  )
}

export default CustomCard
