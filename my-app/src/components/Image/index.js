import React from "react";

function ImageElement(props) {
    return (
        <div class="img-container">
          <img alt={props.key} src={props.src} width="150px"/>
        </div>
    );
}

export default ImageElement;