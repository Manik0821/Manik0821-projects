import { Layout } from "../../lib/layout/Layout"
import { PageNav } from "../../lib/PageNav/PageNav"
import VotingPoll from "./VotingPoll/votingPoll"

const Poll = () => {

    return (
        <div className="page-nav-cont">
            <Layout title={"Poll"} subtitle={"Voying Polls"} >
                <VotingPoll ></VotingPoll>
            </Layout>
        </div>
    )
}

export default Poll;