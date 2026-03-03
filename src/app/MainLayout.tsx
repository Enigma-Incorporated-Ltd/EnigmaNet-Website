import BackToTop from "@/components/BackToTop";
import Loader from "@/components/Loader";
import type { ChildrenType } from "@/components/SimplebarClient";


const MainLayout = ({ children }: ChildrenType) => {

    return (
        <>
            <Loader />
            {children}
            <BackToTop />
        </>
    );
};

export default MainLayout;
