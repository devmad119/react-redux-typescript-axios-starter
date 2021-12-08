import axios, { AxiosInstance, AxiosPromise, AxiosResponse } from 'axios';
import authApi from 'common/api/auth';
import isEmpty from 'validation/is-empty';
import {config} from 'config';

class HttpApiService {
  private _axiosInstance: AxiosInstance | undefined;
  private _baseURL: string;

  constructor(baseURL: string) {
    this._baseURL = baseURL;
    this.createAxiosInstance();
  }

  private defaultOptions = (): any => {
    let headers: any = {};
    if (isEmpty(authApi.getToken())) {
      headers = {
        Accept: 'application/json',
      };
    } else {
      headers = {
        Accept: 'application/json',
        Authorization: config.tokenSuffix + authApi.getToken(),
      };
    }
    const options = {
      baseURL: this._baseURL,
      withCredentials: true, // Window Authentification
      headers,
    };
    return options;
  };

  /**
   * Create instance
   */
  private createAxiosInstance() {
    this._axiosInstance = axios.create(this.defaultOptions());
    // this.checkAutorization()

    // Add a request interceptor
    this._axiosInstance.interceptors.request.use(
      config => config,
      error => {
        return Promise.reject(error);
      },
    );

    // Add a response interceptor
    this._axiosInstance.interceptors.response.use(this.handleSuccess, this.handleError);
  }

  public get(endpoint: string, conf = {}): AxiosPromise {
    return new Promise((resolve, reject) => {
      this._axiosInstance!.get(`${endpoint}`, conf)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  public create(endpoint: string, data: {}, conf = {}): AxiosPromise {
    return this.post(endpoint, data, conf);
  }

  public post(endpoint: string, data: {}, conf = {}): AxiosPromise {
    return new Promise((resolve, reject) => {
      this._axiosInstance!.post(`${endpoint}`, data, conf)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  public update(endpoint: string, data: {}, conf = {}): AxiosPromise {
    return new Promise((resolve, reject) => {
      this._axiosInstance!.put(`${endpoint}`, data, conf)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  public delete(endpoint: string, id: any, conf = {}): AxiosPromise {
    return new Promise((resolve, reject) => {
      this._axiosInstance!.delete(`${endpoint}/${id}`, conf)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  public deleteFile(endpoint: string, conf = {}): AxiosPromise {
    return new Promise((resolve, reject) => {
      this._axiosInstance!.delete(`${endpoint}`, conf)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  public uploadFile(endpoint: string, data: FormData, conf = {}): AxiosPromise {
    return this.post(endpoint, data, conf);
  }

  public downloadFile(endpoint: string): AxiosPromise {
    const conf = {
      responseType: 'blob', // important
      timeout: 30000,
    };
    return this.get(endpoint, conf);
  }

  handleSuccess(response: AxiosResponse) {
    // console.log('handleSuccess' + JSON.stringify(response))
    return response;
  }

  handleError = (err: any) => {
    let errorStatement: string = '';
    if (!err.response) {
      console.log(`Network error: ${err}`);
      errorStatement = err.message;
    } else {
      if (err.response !== undefined) {
        const { status } = err.response;
        console.log(`HttpService::Error(${status}) : ${err.response.data.message}`);
        errorStatement = err.response.data.message;
      }
    }
    return Promise.reject(errorStatement);
  };

  redirectTo = (document: any, path: string) => {
    document.location = path;
  };
}

export default HttpApiService;
