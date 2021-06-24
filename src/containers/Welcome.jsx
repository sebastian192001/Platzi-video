import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => (
    <>
        <Link to ="/">
            <h1> Welcome </h1>
            <video>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/NH_zKJZ_KQs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </video>
        </Link>
    </>
)

export default Welcome