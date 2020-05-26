import {
  getModule,
  Module,
  Mutation,
  MutationAction,
  VuexModule
} from "vuex-module-decorators";
import store from "@/store";
import { Profile, User, UserSubmit, UserForUpdate } from "../models";
import { fetchUser } from "../api";

@Module({
  namespaced: true,
  name: "users",
  store,
  dynamic: true
})
class UsersModule extends VuexModule {
  
  user: any = null;
  
  @Mutation
   SET_SIMPLE_USER(user: any ) {
    this.user = user
  }

  @MutationAction
  async setUser(user: any) {
    return { user };
  }
}

export default getModule(UsersModule);
