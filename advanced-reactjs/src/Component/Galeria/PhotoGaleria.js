import React, {memo, useState} from "react";
import Button from "../Button";
function PhotoGaleria(props) {

    const {photos} = props

    const [galeria, setgaleria] = useState(photos)

    const handleRemove = (key) => {
        const newGaleria = galeria.filter((img, index) => index !== key)
        setgaleria(newGaleria)
    }

    const renderPhotos = (img, key) => {
        return (
            <div>
                <img src={img}/>
                <br/>
                <Button onClick={() => handleRemove(key)}>
                  Remover {key}
                </Button>
            </div>
        )
    }

    return(
        <div>
            {galeria.map(renderPhotos)}
        </div>
    )
}

export default memo(PhotoGaleria)