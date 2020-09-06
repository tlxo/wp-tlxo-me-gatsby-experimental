import React from "react"
import { Heading, Box, Grid } from "@chakra-ui/core"
import { Link } from "gatsby"
import GatsbyLogo from "../assets/svg/gatsby.inline.svg"

export default () => (
  <Heading as="h1">
    <Link to="/">
      <Grid gridTemplateColumns="50px 1fr" gridGap="20px">
        <span
          style={{
            transform: `translateY(5px)`,
            display: `inline-block`,
          }}
        >
          beta.tlxo.me
        </span>
      </Grid>
    </Link>
  </Heading>
)
