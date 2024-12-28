import { TeamsEntry, TeamsKey } from "@src/types"
import { useCallback, useState, MouseEvent } from "react";
import { MerchListing } from "./types";
import { MerchItem } from "./MerchItem";
import { TEAMS } from "@src/data/partyfest2025";
import styles from './Merch.module.css';

const listings: MerchListing[] = [
    {
        name: 'Sweatshirt',
        price: "$50.00+",
        url: 'https://designedbyradiant.etsy.com/listing/1849764445',
        imageKey: 'sweatshirt',
        images: ['front.png', 'model.png', 'model2.png'],
    },
    {
        name: 'T-Shirt',
        price: "$25.00",
        url: 'https://designedbyradiant.etsy.com/listing/1849764607',
        imageKey: 'tshirt',
        images: ['front.png', 'model.png', 'model2.png'],
    },
];

const teams = Object.keys(TEAMS);

export const Merch2025 = () => {
    const [selectedTeam, setSelectedTeam] = useState<TeamsKey>('No Team');

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
                    <MerchItem key={`merch-listing-${listing.name}`} year={2025} listing={listing} team={selectedTeam} />
                )
            })}
            <MerchItem key={`merch-listing-mug`} year={2025} listing={{
                name: 'Party Fest 2025 Mug',
                price: 18,
                url: 'https://designedbyradiant.etsy.com/listing/1850328755',
                imageKey: 'mug',
                images: ['front.png', 'sideA.png', 'sideB.png'],
            }}/>
            <MerchItem key={`merch-listing-sticker`} year={2024} listing={{
                name: 'Poppy the Penguin Magnet',
                price: 10.35,
                url: 'https://designedbyradiant.etsy.com/listing/1653550029/poppy-the-party-penguin-magnet',
                imageKey: 'sticker',
                images: ['front.jpg', 'context.jpg'],
            }}/>
        </div>
    </div>
};

export default Merch2025;