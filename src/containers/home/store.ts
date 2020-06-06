import { action, observable } from 'mobx';

import { getPrice } from '../../apis/economy.api';

export default class HomeStore {
  @observable records: any[] = [];

  @action buildRecords = async () => {
    try {
      const { data } = await getPrice();
      this.records = Object.values(data);
    } catch (error) {
      this.records = [];
      throw new Error('Failure on get cotacion')
    }

  }
}

const home = new HomeStore();
export { home };