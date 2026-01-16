import { Layout } from "../../../../lib/layout/Layout"
import { TabsModule } from "../../../../lib/TabModule/Tabs"

export const TabsComponent = () => {
    return (
        <div className="tabs-page">
            <Layout title={"Tab Navigation"} subtitle={"Tab Navigation Component"} >
                <TabsModule />
            </Layout>
        </div>
    )
}