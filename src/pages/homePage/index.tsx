import React, { FunctionComponent } from "react";
import { AreaCardData } from "../../utils/components";

const HomePage = () => {
  return (
    <div className="">
      <div className="container text-center" id="main-text">
        <h1>FConecta</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta volutpat placerat. Etiam tincidunt dignissim elit id gravida. Donec blandit, diam vel fermentum consectetur, odio leo facilisis mi, ut feugiat eros purus vel augue. Donec luctus est nec mattis vulputate. Nulla commodo lorem a scelerisque aliquam. Quisque hendrerit nisi at neque porttitor, et consectetur risus blandit. Curabitur interdum pellentesque quam eu efficitur. Vivamus vel metus neque. Fusce sit amet neque massa.
        </p>
        <h2>
          Nullam vitae mauris in lorem pretium tempor in condimentum lectus.
        </h2>
      </div>
      <div className="container" id="area-cards">
      </div>
    </div>
  )
}
const ListCards: FunctionComponent<{
}> = props => (
  <div id="area-cards">
  </div>
)
export default HomePage
