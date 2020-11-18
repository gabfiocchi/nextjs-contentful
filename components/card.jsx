import classNames from 'classNames';
import styles from '../styles/components/card.module.scss';
import { useState } from 'react';
import { Card, Text } from '@geist-ui/react';


const ItemCard = ({ item }) => {
    const [isActive, setActive] = useState(false);


    const handleClassChange = () => {
        setActive(!isActive);
    };
    return (
        <Card className={classNames([styles.card, isActive && styles.selected])} onClick={handleClassChange} >
            <Card.Content className={styles.content}>
                <Text p className={styles.text}>{item.fields.title}</Text>
            </Card.Content>
        </Card >
    )
}

export default ItemCard