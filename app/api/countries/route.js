export const GET = async () => {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_COUNTRIES_URL)

    const countries = await res.json()
    return Response.json(countries.data)
  } catch (error) {
    return Response.json(
      {
        error: {
          message: 'Could not fetch countries',
          details: error.message
        }
      },
      { status: 500 }
    )
  }
}
