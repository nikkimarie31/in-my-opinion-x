import { useState, useEffect, FunctionComponent } from 'react';
import Link from 'next/link';
import { AppBar, IconButton, Drawer, List, ListItem, Toolbar, Typography, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import styles from './styles/Header.module.css';

const Header: FunctionComponent = () => {
    const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
    const [categories, setCategories] = useState<string[]>([]);

    useEffect(() => {
        const loadCategories = async () => {
            try {
                const response = await fetch('/api/categories');
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }
                const data = await response.json();
                setCategories(data);
            } catch (error) {
                console.error('Failed to fetch categories', error);
            }
        };
        loadCategories();
    }, []);

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
                    <div>
                        {
                            categories.map((category, index) => (
                                <Link key={index} href={`/category/${category}`} passHref>
                                    <Button className={styles.navButton}>{category}</Button>
                                </Link>
                            ))
                        }

                    </div>
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
