import { Route, Routes, useLocation } from "react-router-dom";
import AuthProvider from "./AuthContext";
import HomePage from "./components/HomePage";
import HomePageParty from "./components/HomePageParty";
import InvitationStatus from "./components/InvitationStatus";
import NavBar from "./components/NavBar";
import Result from "./components/Result";
import NotFound from "./components/NotFound";
import DynamicFavicon from "./components/DynamicFavicon";
import CreateUser from "./components/CreateUser";
import Login from "./components/Login";
import RequireAuth from "./RequireAuth";
import SongList from "./components/SongList";
import MusicPlayer from "./components/MusicPlayer";
import ContactIcon from "./components/ContactIcon";

const App = () => {
    const location = useLocation();

    return (
        <>
            <div
                className="bg-gray-200 min-h-screen font-black"
                style={{
                    fontFamily: "'Poiret One', sans-serif",
                }}
            >
                {(location.pathname === "/dinner-details" ||
                    location.pathname === "/party-details") && <MusicPlayer />}
                {(location.pathname === "/dinner-details" ||
                    location.pathname === "/party-details") && <ContactIcon />}
                <AuthProvider>
                    <DynamicFavicon />
                    <NavBar />
                    <Routes>
                        <Route
                            exact
                            path="/dinner-details"
                            element={<HomePage />}
                        />
                        <Route
                            exact
                            path="/party-details"
                            element={<HomePageParty />}
                        />
                        <Route element={<RequireAuth />}>
                            <Route path="/new-user" element={<CreateUser />} />
                        </Route>
                        <Route path="/login" element={<Login />} />
                        <Route element={<RequireAuth />}>
                            <Route
                                path="/invitation-status"
                                element={<InvitationStatus />}
                            />
                        </Route>
                        <Route element={<RequireAuth />}>
                            <Route path="/songs-list" element={<SongList />} />
                        </Route>
                        <Route path="/result" element={<Result />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </AuthProvider>
            </div>
        </>
    );
};

export default App;
