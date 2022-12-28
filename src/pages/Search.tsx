import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Container, ListGroup } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

import { SearchBar, SearchBarElement } from "@components/SearchBar";
import { SimplePagination } from "@components/SimplePagination";
import { useAuthContext } from "@context/useAuthContext";
import { ROUTES as routeConstants } from "@constants/routes";
import { search } from "@features/github/service";
import { SearchResult } from "@features/user/components";
import { useParamNavigate } from "@hooks/useParamNavigate";

interface SearchProps {
  type: string;
  queryField: string;
  pageSize: number;
}

const Search = ({ type, queryField, pageSize }: SearchProps) => {
  const searchID = `${type}-search`;

  const navigate = useParamNavigate();
  const { token } = useAuthContext();
  const [queryParams, setQueryParams] = useSearchParams();
  const [loading, setLoading] = useState<boolean>(false);

  const [page, setPage] = useState<number>(
    parseInt(queryParams.get("page") || "1")
  );
  const [searchValue, setSearchValue] = useState<string | null>(
    queryParams.get(queryField)
  );

  const [results, setResults] = useState<Array<any>>([]);
  const [total, setTotal] = useState<number>(0);

  const onSearchSubmit = (event: React.FormEvent<SearchBarElement>) => {
    event.preventDefault();
    setSearchValue(event.currentTarget.search.value);
    setPage(1);
  };

  useEffect(() => {
    const newQueryParameters = new URLSearchParams();
    newQueryParameters.set("page", `${page}`);
    if (searchValue) {
      setLoading(true);
      search(
        token as string,
        type,
        encodeURIComponent(`${searchValue} in:${queryField}`),
        page
      )
        .then(({ data, status }) => {
          if (status === 200) {
            setResults(data.items);
            setTotal(data.total_count);
          }
        })
        .finally(() => setLoading(false));
      newQueryParameters.set(queryField, searchValue);
    }
    setQueryParams(newQueryParameters);
  }, [page, searchValue]);

  return (
    <Container>
      {/* SearchBar */}
      <SearchBar
        id={searchID}
        onSubmit={onSearchSubmit}
        defaultValue={searchValue || ""}
        placeholder="Search Users"
      />

      {!loading ? (
        <>
          {/* Results */}
          <ListGroup>
            {results.map((data) => (
              <SearchResult
                action
                key={data.id}
                className="d-flex align-items-center"
                style={{ maxHeight: "50px" }}
                onClick={() =>
                  navigate(routeConstants.USER_PROFILE.PATH, {
                    username: data.login,
                  })
                }
                avatarUrl={data.avatar_url}
                username={data.login}
              />
            ))}
          </ListGroup>

          {/* Pagination */}
          {results?.length ? (
            <SimplePagination
              // firstPage={1}
              lastPage={Math.ceil(Math.min(total, 1000) / pageSize)}
              currPage={page}
              onPageChange={(page) => setPage(page)}
            />
          ) : undefined}
        </>
      ) : (
        <div
          style={{ height: "400px" }}
          className="d-flex justify-content-center align-items-center"
        >
          <Spinner />
        </div>
      )}
    </Container>
  );
};

Search.defaultProps = {
  pageSize: 10,
};

export default Search;
