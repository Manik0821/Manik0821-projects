import { Layout } from "../../../../lib/layout/Layout"
import { PageNav } from "../../../../lib/PageNav/PageNav"

export const Pagination = () => {

    return (
        <div className="page-nav-cont">
            <Layout title={"Pagination"} subtitle={"Page Navigation"} >
                <PageNav ></PageNav>
            </Layout>
        </div>
    )
}