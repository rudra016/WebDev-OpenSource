import reducers from "../redux/reducers/queryReducers";

test("reducers look like initial state", () => {
  let state;
  state = reducers(undefined, {});
  expect(state).toEqual({
    data: {
      loading: false,
      searchword: "",
      filterby: "",
      result: {},
      show: 0,
      show_load: false,
      error: "",
    },
  });
});

test("reducers state when loading", () => {
  let state;
  state = reducers(
    {
      data: {
        loading: false,
        searchword: "Romeo",
        filterby: "",
        result: {},
        show: 0,
        error: "",
        show_load: false,
      },
    },
    { type: "LOADING" }
  );
  expect(state).toEqual({
    data: {
      loading: true,
      searchword: "Romeo",
      filterby: "",
      result: {},
      show: 0,
      show_load: false,
      error: "",
    },
  });
});

test("reducers state after set Seach word", () => {
  let state;
  state = reducers(
    {
      data: {
        loading: false,
        searchword: "",
        filterby: "",
        result: {},
        show: 0,
        error: "",
      },
    },
    { type: "SET_SEARCHWORD", payload: "Romeo" }
  );
  expect(state).toEqual({
    data: {
      loading: false,
      searchword: "Romeo",
      filterby: "",
      result: {},
      show: 0,
      error: "",
    },
  });
});

test("reducers after filter", () => {
  let state;
  state = reducers(
    {
      data: {
        loading: false,
        searchword: "Romeo",
        filterby: "",
        result: {
          resultCount: 0,
          results: [],
        },
        show: 0,
        error: "",
      },
    },
    { type: "SET_FILTER", payload: "artistTerm" }
  );
  expect(state).toEqual({
    data: {
      loading: false,
      searchword: "Romeo",
      filterby: "artistTerm",
      result: {
        resultCount: 0,
        results: [],
      },
      show: 0,
      error: "",
    },
  });
});

test("reducers state after fetch", () => {
  let state;
  state = reducers(
    {
      data: {
        loading: true,
        searchword: "Romeo",
        filterby: "",
        result: {},
        show: 0,
        error: "",
      },
    },
    {
      type: "SET_RESULT",
      payload: {
        resultCount: 1,
        results: [
          {
            wrapperType: "track",
            kind: "song",
            artistId: 5453136,
            collectionId: 298596947,
            trackId: 298596949,
            artistName: "Basement Jaxx",
            collectionName: "Rooty",
            trackName: "Romeo",
            collectionCensoredName: "Rooty",
            trackCensoredName: "Romeo",
            artistViewUrl:
              "https://music.apple.com/us/artist/basement-jaxx/5453136?uo=4",
            collectionViewUrl:
              "https://music.apple.com/us/album/romeo/298596947?i=298596949&uo=4",
            trackViewUrl:
              "https://music.apple.com/us/album/romeo/298596947?i=298596949&uo=4",
            previewUrl:
              "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/9c/a9/e8/9ca9e894-72f9-cbf0-e9e2-9c67d698ee76/mzaf_7750226281919788288.plus.aac.p.m4a",
            artworkUrl30:
              "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/08/65/00/08650006-1b80-785c-9b32-7a3ed124bde8/634904014384.png/30x30bb.jpg",
            artworkUrl60:
              "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/08/65/00/08650006-1b80-785c-9b32-7a3ed124bde8/634904014384.png/60x60bb.jpg",
            artworkUrl100:
              "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/08/65/00/08650006-1b80-785c-9b32-7a3ed124bde8/634904014384.png/100x100bb.jpg",
            collectionPrice: 9.99,
            trackPrice: 1.29,
            releaseDate: "2001-06-04T07:00:00Z",
            collectionExplicitness: "notExplicit",
            trackExplicitness: "notExplicit",
            discCount: 1,
            discNumber: 1,
            trackCount: 13,
            trackNumber: 1,
            trackTimeMillis: 217493,
            country: "USA",
            currency: "USD",
            primaryGenreName: "Electronic",
            isStreamable: true,
          },
        ],
      },
    }
  );
  expect(state).toEqual({
    data: {
      loading: false,
      searchword: "Romeo",
      filterby: "",
      result: {
        resultCount: 1,
        results: [
          {
            wrapperType: "track",
            kind: "song",
            artistId: 5453136,
            collectionId: 298596947,
            trackId: 298596949,
            artistName: "Basement Jaxx",
            collectionName: "Rooty",
            trackName: "Romeo",
            collectionCensoredName: "Rooty",
            trackCensoredName: "Romeo",
            artistViewUrl:
              "https://music.apple.com/us/artist/basement-jaxx/5453136?uo=4",
            collectionViewUrl:
              "https://music.apple.com/us/album/romeo/298596947?i=298596949&uo=4",
            trackViewUrl:
              "https://music.apple.com/us/album/romeo/298596947?i=298596949&uo=4",
            previewUrl:
              "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/9c/a9/e8/9ca9e894-72f9-cbf0-e9e2-9c67d698ee76/mzaf_7750226281919788288.plus.aac.p.m4a",
            artworkUrl30:
              "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/08/65/00/08650006-1b80-785c-9b32-7a3ed124bde8/634904014384.png/30x30bb.jpg",
            artworkUrl60:
              "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/08/65/00/08650006-1b80-785c-9b32-7a3ed124bde8/634904014384.png/60x60bb.jpg",
            artworkUrl100:
              "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/08/65/00/08650006-1b80-785c-9b32-7a3ed124bde8/634904014384.png/100x100bb.jpg",
            collectionPrice: 9.99,
            trackPrice: 1.29,
            releaseDate: "2001-06-04T07:00:00Z",
            collectionExplicitness: "notExplicit",
            trackExplicitness: "notExplicit",
            discCount: 1,
            discNumber: 1,
            trackCount: 13,
            trackNumber: 1,
            trackTimeMillis: 217493,
            country: "USA",
            currency: "USD",
            primaryGenreName: "Electronic",
            isStreamable: true,
          },
        ],
      },
      show: 0,
      error: "",
    },
  });
});

test("reducers after increment show 1/2", () => {
  let state;
  state = reducers(
    {
      data: {
        loading: false,
        searchword: "Romeo",
        filterby: "artistTerm",
        result: {
          resultCount: 0,
          results: [],
        },
        show: 0,
        error: "",
      },
    },
    { type: "RESULT_SHOW" }
  );
  expect(state).toEqual({
    data: {
      loading: false,
      searchword: "Romeo",
      filterby: "artistTerm",
      result: {
        resultCount: 0,
        results: [],
      },
      show: 0.5,
      error: "",
      show_load: false,
    },
  });
});
test("reducers after increment show 2/2", () => {
  let state;
  state = reducers(
    {
      data: {
        loading: false,
        searchword: "Romeo",
        filterby: "artistTerm",
        result: {
          resultCount: 0,
          results: [],
        },
        show: 19,
        error: "",
      },
    },
    { type: "RESULT_SHOW" }
  );
  expect(state).toEqual({
    data: {
      loading: false,
      searchword: "Romeo",
      filterby: "artistTerm",
      result: {
        resultCount: 0,
        results: [],
      },
      show: 19,
      error: "",
      show_load: false,
    },
  });
});

test("reducers state when error", () => {
  let state;
  state = reducers(
    {
      data: {
        loading: true,
        searchword: "love",
        filterby: "artistTerm",
        result: {},
        show: 0,
        error: "",
      },
    },
    { type: "RESULT_ERROR" }
  );
  expect(state).toEqual({
    data: {
      loading: false,
      searchword: "love",
      filterby: "artistTerm",
      result: {},
      show: 0,
      error: "true",
    },
  });
});

test("reducers when show_loading action", () => {
  let state;
  state = reducers(
    {
      data: {
        loading: false,
        searchword: "love",
        filterby: "artistTerm",
        result: {},
        show: 0,
        error: "",
        show_load: false,
      },
    },
    { type: "SHOW_LOADING" }
  );
  expect(state).toEqual({
    data: {
      loading: false,
      searchword: "love",
      filterby: "artistTerm",
      result: {},
      show: 0,
      error: "",
      show_load: true,
    },
  });
});
