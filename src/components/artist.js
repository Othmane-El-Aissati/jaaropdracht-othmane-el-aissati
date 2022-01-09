import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
    wrapper,
    image,
    artistInfo,
    artistName,
  } from "./artist.module.css"

  export const Artist = ({ monster, slug }) => {
    const profile = getImage(monster.monsterMeta.image.localFile)
    return (
      <Link
      className={wrapper}
        to={slug}
      >
        <GatsbyImage
        className={image}
          image={profile}
          alt={monster.monsterMeta.image.altText}
        />
        <div className={artistInfo}>
          {monster.monsterMeta.monsterName && (
            <p className={artistName}>{monster.monsterMeta.monsterName}</p>
          )}
        </div>
      </Link>
    )
  }
  export default Artist