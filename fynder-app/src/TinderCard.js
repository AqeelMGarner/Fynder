import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function TinderCard() {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Test Museum
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Description of Test museum
                </Typography>
            </CardContent>
            <CardActions>

                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}

export default TinderCard