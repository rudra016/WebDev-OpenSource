import Gallery from "@/app/components/Gallery"

type Props = {
    params: {
        myParams: (string | undefined)[]
    }
}

export function generateMetadata({ params: { myParams } }: Props) {

    const topic = myParams?.[0] ?? "curated"
    const page = myParams?.[1] ?? "1"

    return {
        title: `Results for ${topic} - Page ${page}`
    }
}

export default function SearchResults({ params: { myParams } }: Props) {

    const topic = myParams?.[0] ?? "curated"
    const page = myParams?.[1] ?? "1"

    return <Gallery topic={topic} page={page} />
}