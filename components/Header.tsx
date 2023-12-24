
import React, { useState, FunctionComponent } from 'react';
import Link from 'next/link';
import { AppBar, IconButton, Drawer, List, ListItem, Toolbar, Typography, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import styles from './styles/Header.module.css';

const Header: FunctionComponent = () => {
    const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
    

    const toggleDrawer = (open: boolean) => {
        setDrawerOpen(open);
    };


    return (
        <>
            <AppBar position='static' style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', boxShadow: 'none', padding: '0 2rem' }} className={styles.toolbar}>
                <Toolbar>
                    <IconButton edge='start' aria-label='Open menu' className={styles.menuButton} onClick={() => toggleDrawer(true)}>
                        <MenuIcon />
                    </IconButton>
                    <Typography className={styles.title} variant='h6'>
                        In My Opinion
                    </Typography>
                   
                </Toolbar>
            </AppBar>
            <Drawer
                open={drawerOpen}
                onClose={() => toggleDrawer(false)}
                PaperProps={{ style: { borderRight: 'none' } }}
                className={styles.drawer}
            >
                <List>
                    {['/', '/about', '/blog', '/flexbox', '/credentials', '/contact', '/privacy-policy'].map((path, index) => (
                        <ListItem key={index} className={styles.drawerListItem} onClick={() => toggleDrawer(false)}>
                            <Link href={path} passHref>
                                <Button className={styles.drawerListItemButton}>
                                    {path.substring(1) || 'Home'}
                                </Button>
                            </Link>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </>
    );
};

export default Header;
