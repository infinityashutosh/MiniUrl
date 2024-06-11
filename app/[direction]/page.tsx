export default function Page({ params }: { params: { direction: string } }) {
    return <div>My Post: {params.direction}</div>
  }