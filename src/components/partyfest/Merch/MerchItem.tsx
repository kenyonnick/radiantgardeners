/* eslint-disable @next/next/no-img-element */
import { TeamsEntry, TeamsKey } from "@src/types"
import { useCallback, useMemo, useState } from "react";
import { MerchListing } from "./types";

import styles from './MerchItem.module.css';

const imgRoot = "/imgs/party-fest/2024/merch";
const priceFmt = new Intl.NumberFormat("en-US", {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
});

type MerchItemProps = {
    listing: MerchListing;
    team?: TeamsKey;
}

function buildImageUrl(key: string, img: string, team?: TeamsKey) {
    return team ? `${imgRoot}/${key}/${team.toLowerCase()}/${img}` : `${imgRoot}/${key}/${img}`;
} 

export const MerchItem = ({ listing, team }: MerchItemProps) => {
    const [imgIndex, setImgIndex] = useState(0);
    const mainImageUrl = useMemo(() => {
        return buildImageUrl(listing.imageKey, listing.images[imgIndex], team);
    }, [imgIndex, listing.imageKey, listing.images, team]);

    const handleGalleryClick = useCallback((index: number) => {
        setImgIndex(index);
    }, []);

    return (
        <div className={styles.card}>
            <img src={mainImageUrl} alt={`${team} ${listing.name}`} className={styles.mainImage}/>
            <div className={styles.gallery}>
                {listing.images.map((img, index) => {
                    const key = `${listing.name} gallery image ${index}`;
                    return (<img
                        key={key}
                        src={buildImageUrl(listing.imageKey, img, team)} 
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
                    <h3>{priceFmt.format(listing.price)}</h3><span color="darkgray">+S&H</span>
                </div>
                <a href={listing.url} target="_blank" rel="noreferrer">Buy it on Etsy</a>
            </div>
        </div>
    )
}