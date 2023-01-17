import {Any} from "google-protobuf/google/protobuf/any_pb";
import AnyDefault from "google-protobuf/google/protobuf/any_pb";

const any = new Any();
const anyDefault = new AnyDefault.Any();

// Both are created successfully:
console.log({any, anyDefault});
