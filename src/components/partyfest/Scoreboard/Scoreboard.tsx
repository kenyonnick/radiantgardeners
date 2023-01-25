import { ReactNode } from 'react';
import styles from './Scoreboard.module.css';

type Day = {
    green?: number;
    orange?: number;
    purple?: number;
    yellow?: number;
    winner?: string;
    winningTeam?: string;
};

const scores: Day[] = [
    {
        green: 12,
        orange: 6,
        purple: 12,
        yellow: 15,
        winner: 'Jeice',
        winningTeam: 'Yellow',
    },
    {
        green: 13,
        orange: 10,
        purple: 14,
        yellow: 9,
        winner: 'Lilindo_s', 
        winningTeam: 'Purple',
    },{},{},{},
];

const teamScore = (days: Day[], team: keyof Omit<Day, 'winner' | 'winningTeam'>) => {
    return scores.map((day) => day[team]).reduce((prev, curr) => {
        if(curr) return (prev ?? 0) + curr;
        else return prev;
    }, 0);
}

export const Scoreboard = () => {
    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <td>Day</td>
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
                            <td>{index+1}</td>
                            <td align="right">{day.green ?? '?'}</td>
                            <td align="right">{day.orange ?? '?'}</td>
                            <td align="right">{day.purple ?? '?'}</td>
                            <td align="right">{day.yellow ?? '?'}</td>
                            <td align="center">
                                {day.winner ?? '?'}
                                <br/>
                                {day.winningTeam}
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
                    <td align="center">?</td>
                </tr>
            </tbody>
        </table>
    );
}