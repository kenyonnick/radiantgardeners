import { Team, YELLOW, PURPLE, GREEN, ORANGE } from '../../../data';
import styles from './Scoreboard.module.css';

type ScoreRow = {
    label: string;
    green?: number;
    orange?: number;
    purple?: number;
    yellow?: number;
    winner?: string;
    winningColor?: string;
    winningGradient?: string,
};

const scores: ScoreRow[] = [
    {
        label: 'Day 1',
        green: 12,
        orange: 6,
        purple: 12,
        yellow: 15,
        winner: 'Jeice',
        winningColor: YELLOW.color,
    },
    {
        label: 'Day 2',
        green: 13,
        orange: 10,
        purple: 14,
        yellow: 9,
        winner: 'Lilindo_s', 
        winningColor: PURPLE.color,
    },
    {
        label: 'Day 3',
        green: 11,
        orange: 12,
        purple: 13,
        yellow: 7,
        winner: 'xIlyria',
        winningColor: PURPLE.color,
    },
    {
        label: 'Day 4',
        green: 9,
        orange: 14,
        purple: 9,
        yellow: 10,
        winner: 'NotoriousCRANK',
        winningColor: ORANGE.color,
    },
    {
        label: 'Day 5',
        green: 12,
        orange: 24,
        purple: 26,
        yellow: 24,
        winner: 'Purple',
        winningColor: PURPLE.color,
    },
    {
        label: 'Team Spirit',
        green: 2,
        winner: 'Green',
        winningColor: GREEN.color,
    },
    {
        label: 'Craziest Duel',
        green: 1,
        purple: 1,
        winner: 'KTWayfinder & Lilindo',
        winningGradient: `linear-gradient(to right, ${GREEN.color}, ${PURPLE.color}`,
    },
    {
        label: 'Best Trash Talk',
        yellow: 2,
        winner: 'AriefJohan',
        winningColor: YELLOW.color,
    },
    {
        label: 'Absolutely Robbed',
        yellow: 2,
        winner: 'LanzOfMasters',
        winningColor: YELLOW.color,
    },
    {
        label: 'Greatest Showman',
        orange: 2,
        winner: 'Mochocalate9k',
        winningColor: ORANGE.color,
    },
    {
        label: 'Chat Pick',
        green: 5,
        winner: 'Green',
        winningColor: GREEN.color,
    }
];

const teamScore = (days: ScoreRow[], team: keyof Omit<ScoreRow, 'label' | 'winner' | 'winningColor' | 'winningGradient'>) => {
    return days.map((day) => day[team]).reduce((prev, curr) => {
        if(curr) return (prev ?? 0) + curr;
        else return prev;
    }, 0);
}

export const Scoreboard = () => {
    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <td></td>
                    <td align='right'>Green</td>
                    <td align='right'>Orange</td>
                    <td align='right'>Purple</td>
                    <td align='right'>Yellow</td>
                    <td align='center'>Winner</td>
                </tr>
            </thead>
            <tbody>
                {scores.map((day, index) => {
                    return (
                        <tr key={index}>
                            <td>{day.label}</td>
                            <td align="right">{day.green}</td>
                            <td align="right">{day.orange}</td>
                            <td align="right">{day.purple}</td>
                            <td align="right">{day.yellow}</td>
                            <td align="center" style={{ backgroundColor: day.winningColor, backgroundImage: day.winningGradient }}>
                                {day.winner}
                            </td>
                        </tr>
                    )
                })}
                <tr>
                    <td>TOTAL</td>
                    <td align="right">{teamScore(scores, 'green')}</td>
                    <td align="right">{teamScore(scores, 'orange')}</td>
                    <td align="right">{teamScore(scores, 'purple')}</td>
                    <td align="right">{teamScore(scores, 'yellow')}</td>
                    <td align="center" style={{ backgroundColor: PURPLE.color }}>Purple</td>
                </tr>
            </tbody>
        </table>
    );
}