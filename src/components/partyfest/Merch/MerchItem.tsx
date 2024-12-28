/* eslint-disable @next/next/no-img-element */
import { TeamsEntry, TeamsKey } from "@src/types"
import { useCallback, useMemo, useState } from "react";
import { MerchListing } from "./types";

import styles from './MerchItem.module.css';

const priceFmt = new Intl.NumberFormat("en-US", {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
});

type MerchItemProps = {
    listing: MerchListing;
    year: number;
    team?: TeamsKey;
}

function buildImageUrl(key: string, year: number, img: string, team?: TeamsKey) {
    const imgRoot = `/imgs/party-fest/${year}/merch`
    return team ? `${imgRoot}/${key}/${team.toLowerCase()}/${img}` : `${imgRoot}/${key}/${img}`;
} 

export const MerchItem = ({ listing, year, team }: MerchItemProps) => {
    const [imgIndex, setImgIndex] = useState(0);
    const mainImageUrl = useMemo(() => {
        return buildImageUrl(listing.imageKey, year, listing.images[imgIndex], team);
    }, [imgIndex, listing.imageKey, listing.images, team, year]);

    const handleGalleryClick = useCallback((index: number) => {
        setImgIndex(index);
    }, []);

    const formattedPrice = useMemo(() => {
        if (typeof listing.price === 'number') {
            return priceFmt.format(listing.price);
        } else {
            return listing.price as string;
        }
    }, [listing.price]);

    return (
        <div className={styles.card}>
            <img src={mainImageUrl} alt={`${team} ${listing.name}`} className={styles.mainImage}/>
            <div className={styles.gallery}>
                {listing.images.map((img, index) => {
                    const key = `${listing.name} gallery image ${index}`;
                    return (<img
                        key={key}
                        src={buildImageUrl(listing.imageKey, year, img, team)} 
                        alt={key}
                        onClick={(e) => handleGalleryClick(index)}
                        className={index === imgIndex ? styles.selected : undefined}
                        />
                    )
                })}
            </div>
            <div className={styles.info}>
                <h2>{listing.name}</h2>
                <div className={styles.price}>
                    <h3>{formattedPrice}</h3>
                </div>
                <a href={listing.url} target="_blank" rel="noreferrer">Buy it on Etsy</a>
            </div>
        </div>
    )
}