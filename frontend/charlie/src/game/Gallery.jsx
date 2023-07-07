import React from 'react'
import { useState } from 'react'
import './gallery.css'


const Gallery = ({gallery_imgs}) => {

    const [slideNumber, setSlideNumber] = useState(0)
    const [openModal, setOpenModal] = useState(false)
    const handleOpenModal = (index) => {
        setSlideNumber(index)
        setOpenModal(true)
    }




    return (
        <div>
            {openModal &&
                <div className="fullscreen_img">
                    <img src = {gallery_imgs[slideNumber].img} />
                </div>
            }
            <div className="gallery_wrap">
                {
                    gallery_imgs && gallery_imgs.map((slide,index) => {
                        return(
                            <div className="single" 
                                key = {index}
                                onClick = { () => handleOpenModal(index)}
                            >
                                <img src={slide.img} alt=''/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Gallery
