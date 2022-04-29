import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import BrowsePage from "./pages/Browse";
import ListenNowPage from "./pages/ListenNow";
import RadioPage from "./pages/Radio";
import PlayListPage from "./pages/PlayList";

export const RouteNavigation = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="browse" element={<BrowsePage />} />
                <Route path="*" element={<Navigate to="browse" replace />} />
                <Route path="listen-now" element={<ListenNowPage />} />
                <Route path="radio" element={<RadioPage />} />
                <Route path="playlist" element={<PlayListPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RouteNavigation;
