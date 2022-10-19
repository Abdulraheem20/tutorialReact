import React, { Component } from "react";
import "./styles/Card.css";

export class Card extends Component {
  render() {
    return (
      <div>
        {/* <div className="card-wrapper">
           <div className="cards">
           <div className="image">
                <img src="../../images/mum2.png" alt="Image" />
            </div>
            <div className="text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, molestias labore ad magnam doloribus maiores. Iusto, quasi placeat aperiam molestiae ut reprehenderit necessitatibus tempora nulla corrupti quia sed adipisci doloremque animi, veritatis fuga autem, voluptatum rerum. Voluptatem repellendus doloremque autem.</p>
                <button>Subscribe</button>
            </div>
           </div>
        </div> */}
        <div className="card-wrapper">
          <div className="cards">
            <div className="image">
              <img src={this.props.imagess} alt="Image" />
            </div>
            <div className="text">
              <p>{this.props.text}</p>
              <button>{this.props.btn}</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
