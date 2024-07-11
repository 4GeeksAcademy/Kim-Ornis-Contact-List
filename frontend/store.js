export const initialStore=()=>{
  return {
    contacts: []
  }
}

export default function storeReducer(store, action = {}) {
  const type = action.type;
  if (type === 'replace_contacts') {
    /**
     * {
     *   'type': 'replace_contacts',
     *   'contacts': [ *Some array of contact objects* ]
     * }
     */
    return {
      ...store,
      contacts: action.contacts
    }
  } else {
    throw Error("Unknown action.");
  }
}
