import styles from '../styles/components/card.module.scss';
import { useDispatch } from 'react-redux';
import { Card, Text } from '@geist-ui/react';
import { updateConcern } from '../store/survey/action';

const ItemCard = ({ item }) => {
    const dispatch = useDispatch();
    const handleClassChange = ({ index, selected }) => updateConcern({ index, selected })(dispatch);

    return (
        <Card onClick={() => handleClassChange(item)} className={`${styles.card} ${item.selected && styles.selected}`}>
            <Card.Content className={styles.content}>
                <Text p className={styles.text}>{item.title}</Text>
            </Card.Content>
        </Card >
    )
};

export default ItemCard;