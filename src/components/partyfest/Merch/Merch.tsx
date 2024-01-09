import { TeamsEntry, TeamsKey } from "@src/types"
import { useCallback, useState, MouseEvent } from "react";
import { MerchListing } from "./types";
import { MerchItem } from "./MerchItem";
import { TEAMS } from "@src/data/partyfest2024";
import styles from './Merch.module.css';

const listings: MerchListing[] = [
    {
        name: 'Hoodie',
        price: 39.95,
        url: 'https://designedbyradiant.etsy.com/listing/1653522485/party-fest-2024-hoodie',
        imageKey: 'hoodie',
        images: ['main.jpg', 'front.jpg', 'sleeve.jpg'],
    },
    {
        name: 'T-Shirt',
        price: 18.75,
        url: 'https://designedbyradiant.etsy.com/listing/1653530863/party-fest-2024-unisex-ultra-cotton-tee',
        imageKey: 'tshirt',
        images: ['main.jpg', 'front.jpg', 'squat.jpg'],
    },
    {
        name: 'Festival Cropped Tee',
        price: 20.24,
        url: 'https://designedbyradiant.etsy.com/listing/1639454228/party-fest-2024-limited-edition-crop-top',
        imageKey: 'festival',
        images: ['main.jpg', 'front.jpg', 'life.jpg'],
    },
    {
        name: 'Sweatshirt',
        price: 23.50,
        url: 'https://designedbyradiant.etsy.com/listing/1639490800/party-fest-2024-sweatshirt-limited',
        imageKey: 'sweatshirt',
        images: ['main.jpg', 'front.jpg', 'life.jpg'],
    },
    {
        name: 'Official Mug',
        price: 7.33,
        url: 'https://designedbyradiant.etsy.com/listing/1653644187/party-fest-2024-mug-limited-edition',
        imageKey: 'mug',
        images: ['main.jpg', 'alpha.jpg', 'beta.jpg'],
    },
];

const teams = Object.keys(TEAMS);

export const Merch = () => {
    const [selectedTeam, setSelectedTeam] = useState<TeamsKey>('Green');

    const handleTeamChange = useCallback((event: MouseEvent<HTMLButtonElement>) => {
        setSelectedTeam(event.currentTarget.name as TeamsKey)
    }, []);

    return <div className={styles.container}>
        <div className={styles.teams}>
            {Object.values(TEAMS).map(({team}: TeamsEntry) => (
                <button 
                    key={`${team.name}-button`}
                    onClick={handleTeamChange}
                    name={team.name}
                    className={styles.teamButton}
                    style={{ 
                        border: `thick solid ${team.color}`,
                        boxShadow: team.name === selectedTeam ? '0 0.5rem 0.25rem gray' : undefined,
                    }}
                >
                    {team.name}
                </button>
            ))}
        </div>
        <div className={styles.listings}>
            {listings.map((listing: MerchListing) => {
                return (
                    <MerchItem key={`merch-listing-${listing.name}`} listing={listing} team={selectedTeam} />
                )
            })}
        </div>
    </div>
};