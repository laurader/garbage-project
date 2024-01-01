import CircularProgress from "@mui/material/CircularProgress/CircularProgress"
import { FullScreenLoadingStyled } from "./full-screen-loading.styled";

const FullScreenLoading = () => {
    return (
        <FullScreenLoadingStyled.Container>
            <CircularProgress size={80} />
        </FullScreenLoadingStyled.Container>
    )
}

export default FullScreenLoading;