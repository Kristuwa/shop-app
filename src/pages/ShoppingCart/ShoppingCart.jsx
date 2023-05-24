import { useState } from "react";
// import { CardItem } from "../../components/CardItem/CardItem";
// import axios from "axios";
import {
  //   ButtonBack,
  //   HeadContainer,
  //   List,
  //   LoadMore,
  Message,
} from "./ShoppingCart.styled";
// import { HiOutlineArrowCircleLeft } from "react-icons/hi";

import { useLocation } from "react-router-dom";

function ShoppingCart() {
  const location = useLocation();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const backLinkHref = location.state?.from ?? "/";

  return (
    <main>
      {/* {followingUsers.length > 0 && !error && !loading && (
        <>
          <HeadContainer>
            <ButtonBack to={backLinkHref}>
              <HiOutlineArrowCircleLeft /> Back
            </ButtonBack>
            <DropDownMenu
              handleDropdownMenu={handleDropdownMenu}
              isOpen={openMenu}
            />
          </HeadContainer>

          <List>
            {followingUsers.map(
              ({ id, following, avatar, tweets, followersCount }) => (
                <CardItem
                  key={id}
                  avatar={avatar}
                  tweets={tweets}
                  following={following}
                  followersCount={followersCount}
                  id={id}
                />
              )
            )}
          </List>
          {totalPages > 1 && currentPage < totalPages && (
            <LoadMore type="button" onClick={handleLoadMore}>
              Load More
            </LoadMore>
          )}
        </>
      )} */}
      {!error && loading && <Message>Loading....</Message>}
      {error && !loading && <Message>{error}</Message>}
    </main>
  );
}

export default ShoppingCart;
